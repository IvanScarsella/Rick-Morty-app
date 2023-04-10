const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) res.status(400).json({ message: "Faltan datos" })
        const [user, created] = await User.findOrCreate({ where: { email, password } }); // se crean dos variables, created va a ser un booleano que indica si el usuario se creó o no, user va a ser el usuario creado
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message:error })
    }
}

module.exports = {postUser};