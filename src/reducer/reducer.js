const reducer = (state={}, {type, payload})=>{
    
    switch(type){
        case 'Mark':
            if(state[payload.year] === undefined){
                return{
                    ...state,[payload.year]:{
                        [payload.month]:{
                            [payload.date]:payload.tag
                        }
                    }
                }
            }
            else 
            return {
                ...state,
                [payload.year]:{
                    ...state[payload.year],
                    [payload.month]:{
                        ...state[payload.year][payload.month],
                        [payload.date]:payload.tag
                        }}                
            };
        
        default:
            return state;    
    }   
}

export default reducer;