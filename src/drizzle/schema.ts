import { relations, sql } from 'drizzle-orm';
import { pgSchema, pgTable, text, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

export const Users = authSchema.table('users', {
    id: uuid('id').primaryKey(),
});

export const Profile = pgTable('profile', {
    // Matches id from auth.users table in Supabase
    id: uuid('id')
        .primaryKey()
        .references(() => Users.id, { onDelete: 'cascade' }),
    email: varchar('email', { length: 256 }).notNull().unique(),
    name: varchar('name', { length: 256 }).notNull(),
    image: text('image'),
});

export const Post = pgTable('post', {
    id: uuid('id').primaryKey().defaultRandom(),
    title: varchar('title', { length: 256 }).notNull(),
    content: text('content').notNull(),
    profileId: uuid('profile_id')
        .notNull()
        .references(() => Profile.id),
    createdAt: timestamp('created_at')
        .default(sql`now()`)
        .notNull(),
    updatedAt: timestamp('updatedAt', {
        mode: 'date',
        withTimezone: true,
    }).$onUpdateFn(() => sql`now()`),
});

export const ProfileRelations = relations(Profile, ({ one }) => ({
    user: one(Users, {
        fields: [Profile.id],
        references: [Users.id],
    }),
}));

export const PostRelations = relations(Post, ({ one }) => ({
    profile: one(Profile, {
        fields: [Post.profileId],
        references: [Profile.id],
    }),
}));
