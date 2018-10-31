
CREATE SEQUENCE public.users_user_id_seq;

CREATE TABLE public.users (
                user_id INTEGER NOT NULL DEFAULT nextval('public.users_user_id_seq'),
                user_name VARCHAR NOT NULL,
                user_lastname VARCHAR NOT NULL,
                user_username VARCHAR NOT NULL,
                user_email VARCHAR NOT NULL,
                user_password VARCHAR NOT NULL,
                CONSTRAINT id_user PRIMARY KEY (user_id)
);


ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;

CREATE SEQUENCE public.notes_notes_id_seq;

CREATE TABLE public.notes (
                note_id INTEGER NOT NULL DEFAULT nextval('public.notes_notes_id_seq'),
                note_title VARCHAR NOT NULL,
                note_content VARCHAR NOT NULL,
                note_image_url VARCHAR NOT NULL,
                user_id INTEGER NOT NULL,
                created_at DATE NOT NULL,
                updated_at DATE NOT NULL,
                CONSTRAINT id_notes PRIMARY KEY (note_id)
);


ALTER SEQUENCE public.notes_notes_id_seq OWNED BY public.notes.note_id;

ALTER TABLE public.notes ADD CONSTRAINT users_notes_fk
FOREIGN KEY (user_id)
REFERENCES public.users (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
