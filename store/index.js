export  const state = () => {
    return {
        themeMode: 'default'
    }
}

export const mutations = {
    SET_THEME_MODE(state, payload){

        state.themeMode = payload
        console.log(state.themeMode)
    }
}

export const getters = {
    getMode(state) {
        return state.themeMode
    }
}