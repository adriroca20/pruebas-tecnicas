import {type Data, type ApiUploadResponse } from "../types"

export const searchData = async (search:string): Promise<[Error | null, Data | null]> => {
  try {
    const response = await fetch(`http://localhost:3000/api/users?q=${search}`)
    if (!response.ok) {
        return [new Error(response.statusText), null]
    }
    const json = await response.json() as ApiUploadResponse
    return [null, json.data]
  } catch (error) {
    if (error instanceof Error) {
      return [error, null]
    }
    return [new Error("Unknown error"), null]
  }
}