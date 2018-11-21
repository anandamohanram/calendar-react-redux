const updateTag = (date,month,year,tag)=> {
    return{
        type: 'Mark',
        payload:{
            date: date,
            month: month,
            year: year,
            tag: tag
        }
    }
}

export {updateTag};