import { AppThunk } from ".."
import { getMovies, getTrendMovies } from "../../api/getMovies"
import { TypeMovies } from "../../api/shaped/types"
import { startLoading, stopLoading } from "../loader/actions"

export const setMovies = (movies: TypeMovies[]) => {
	return {
		type: 'LOAD_MOVIES',
		payload: movies
	}
}

export const setTrendMovies = (movies: TypeMovies[]) => {
	return {
		type: 'LOAD_TREND_MOVIES',
		payload: movies
	}
}

export const loadTrendMovies = (limit: number, page: number): AppThunk => {
	return async (dispatch) => {
		dispatch(startLoading())
		const movies: TypeMovies[] = (await getTrendMovies(limit, page)).data.docs
		dispatch(setTrendMovies(movies))
		dispatch(stopLoading())
	}
}

export const loadMovies = (limit: number, page: number, year?: string, rating?: string, genre?: string, countrie?: string, name?:string, sortField?:string): AppThunk => {
	
	return async (dispatch) => {
		//dis загрузка
		dispatch(startLoading())
		const movies = (await getMovies(limit, page, year, rating, genre, countrie, name, sortField)).data.docs
		dispatch(setMovies(movies))
		dispatch(stopLoading())
		//dis откл
	}
}

export const setFavMoviesAction = (id: number) => {
	return {
		type: 'SET_FAVORITE_MOVIE',
		payload: id
	}
}

export const setIncPage = () => {
	return {
		type: 'INC_PAGE'
	}
}

export const setDefaultPage = () => {
	return {
		type: 'DEFAULT_PAGE'
	}
}

export const setInitialState = () => {
	return {
		type: 'INITIAL_STATE'
	}
}