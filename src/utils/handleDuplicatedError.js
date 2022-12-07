const handleDuplicatedError = async (parameter, value, Instance) =>{
    
    const valueCount = await Instance.exists().where(parameter).equals(value)

    if(valueCount){
        return true
    }else{
        return false
    }
}

module.exports = handleDuplicatedError