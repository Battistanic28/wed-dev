import dotenv from 'dotenv'
import { google } from 'googleapis'

dotenv.config()
const range = 'Sheet1!A1:A2';

export const getAttendees = async () => {
    const auth = await google.auth.getClient({
        scopes:['https://www.googleapis.com/auth/spreadsheets.readonly']
    })
    const sheets = google.sheets({version: 'v4', auth})
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEETS_API_ID,
        majorDimension: 'COLUMNS',
        range,
    })

    console.log(response.data.values)
    return response
}
