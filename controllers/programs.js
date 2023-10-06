// GET request
module.exports = {
    getPrograms: (req, res) => {
        try {
            res.render('programs.ejs');
        } catch (error) {
            console.log(error);
        }
        
    }
};