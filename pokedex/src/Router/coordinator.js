export const goToHome = (history)=>{
    history.push('/')
}


export const goToDetail = (history, name)=>{
    history.push(`/detail/${name}`)
}


export const goToPokedex = (history)=>{
    history.push('/pokedex')
}

