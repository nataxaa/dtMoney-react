import { useEffect, useState } from "react";

function usePersistedState(key: string, inicialState: any){
    const [state, setState] = useState(() => {
        const storegeValue = localStorage.getItem(key)
        if(storegeValue){
            return JSON.parse(storegeValue)
        }else{
            return inicialState ;
        }
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]

}

export default usePersistedState;