module.exports.user = {
    
    checkUser: 'SELECT user_username, user_email FROM users WHERE user_username = $1 OR user_email = $2',
    getUserEmail: 'SELECT user_email FROM users WHERE user_email = $1',
    getUser: 'SELECT * FROM users WHERE user_username = $1',
    addUser: 'INSERT INTO users (user_name, user_lastname, user_username, user_email, user_password) VALUES ($1,$2,$3,$4,$5) RETURNING user_id',
}

module.exports.note = {

    getUserNotes: 'SELECT * from notes where user_id = $1',
    findNote: 'SELECT prod.id_product AS productid, users.username AS username, prod.id_user AS userid, prod.brand_product AS brand, prod.price_product AS price, prod.name_product AS name, prod.des_product AS description, prod.stock_product AS stock, prod.img_product AS img FROM product AS prod INNER JOIN app_user AS users ON users.id_user = prod.id_user',
    createNote: 'INSERT INTO notes(note_title, note_content, note_image_url, user_id, created_at) VALUES($1,$2,$3,$4,CURRENT_DATE)',
    deleteNote: 'DELETE FROM notes WHERE note_id = $1',
    modifyNote: 'UPDATE notes SET note_title = $1, note_content = $2, note_image_url = $3 WHERE user_id = $1',
}
