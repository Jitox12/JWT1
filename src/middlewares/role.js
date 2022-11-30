const {handleHttpError} = require('../utils/handleError')

const checkRole = (role) => (req,res,next) => {
  try{
    const {user} = req
    const roleByUser = user.role
    const checkValueRole = role.some((rolSingle) => roleByUser.includes(rolSingle))

    if(!checkValueRole){
        handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
        return
    }

    next()
  }catch(err){
    handleHttpError(res, 'ERROR_PERMISSIONS', 403)

  }
}

module.exports = {
    checkRole
}