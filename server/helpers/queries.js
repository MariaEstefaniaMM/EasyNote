module.exports.user = {
    
    checkUser: 'SELECT user_username, user_email FROM users WHERE user_username = $1 OR user_email = $2',
    getUserEmail: 'SELECT user_email FROM users WHERE user_email = $1',
    getUser: 'SELECT * FROM users WHERE user_username = $1',
    addUser: 'INSERT INTO users (user_name, user_lastname, user_username, user_email, user_password) VALUES ($1,$2,$3,$4,$5) RETURNING user_id',
}

module.exports.note = {
    getUserNotes: 'SELECT * from notes where user_id = $1',
    createNote: 'INSERT INTO notes(note_title, note_content, note_image_url, user_id, created_at) VALUES($1,$2,$3,$4,CURRENT_DATE)',
    deleteNote: 'DELETE FROM notes WHERE note_id = $1',
    updateNote: 'UPDATE notes SET note_title = $2, note_content = $3, note_image_url = $4, updated_at=CURRENT_DATE  WHERE note_id = $1',
}
