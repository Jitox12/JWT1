const handleHttpError= (res, message = 'DATA BASE ERROR', code = 505) => {
    res.status(code).send({error:message})
}

module.exports = {
    handleHttpError,
}