
CREATE SEQUENCE public.notes_notes_id_seq;

CREATE TABLE public.notes (
                note_id INTEGER NOT NULL DEFAULT nextval('public.notes_notes_id_seq'),
                note_title VARCHAR NOT NULL,
                note_content VARCHAR NOT NULL,
                note_image_url VARCHAR NOT NULL,
                CONSTRAINT id_notes PRIMARY KEY (note_id)
);


ALTER SEQUENCE public.notes_notes_id_seq OWNED BY public.notes.note_id;

CREATE TABLE public.users (
                user_id INTEGER NOT NULL,
                user_name VARCHAR NOT NULL,
                user_lastname VARCHAR NOT NULL,
                user_username VARCHAR NOT NULL,
                user_email VARCHAR NOT NULL,
                user_password VARCHAR NOT NULL,
                CONSTRAINT id_user PRIMARY KEY (user_id)
);


CREATE SEQUENCE public.user_notes_user_notes_id_seq;

CREATE TABLE public.user_notes (
                user_notes_id INTEGER NOT NULL DEFAULT nextval('public.user_notes_user_notes_id_seq'),
                user_id INTEGER NOT NULL,
                note_id INTEGER NOT NULL,
                CONSTRAINT id_user_notes PRIMARY KEY (user_notes_id)
);


ALTER SEQUENCE public.user_notes_user_notes_id_seq OWNED BY public.user_notes.user_notes_id;

ALTER TABLE public.user_notes ADD CONSTRAINT notes_user_notes_fk
FOREIGN KEY (note_id)
REFERENCES public.notes (note_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.user_notes ADD CONSTRAINT users_user_notes_fk
FOREIGN KEY (user_id)
REFERENCES public.users (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
