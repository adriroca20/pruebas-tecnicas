import {type Data, type ApiUploadResponse } from "../types"

export const uploadFile = async (file: File): Promise<[Error | null, Data | null]> => {
  const formData = new FormData()
  formData.append('file', file)
  try {
    const response = await fetch('http://localhost:3000/api/files', {
      method: 'POST',
      body: formData
    })
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