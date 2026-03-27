import axios from 'axios'
import type { CharactersFiltersType } from '@shared-types/character.types'

export const API_BASE_URL = import.meta.env.VITE_RICK_AND_MORTY_API_URL

export default {
  characters: {
    getList(params?: CharactersFiltersType){
      return axios.get(`${API_BASE_URL}/character`,{ params })
    },
    getDetail(id: string){
      return axios.get(`${API_BASE_URL}/character/${id}`)
    },
  },
}
