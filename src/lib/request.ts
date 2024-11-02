import { ofetch } from 'ofetch'

const STORE_ID = '108362264'

const PUBLIC_TOKEN = 'public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs';

const baseURL = `https://app.ecwid.com/api/v3/${STORE_ID}/`

export const apiFetch = ofetch.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${PUBLIC_TOKEN}`,
  },
})
