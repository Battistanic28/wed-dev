import dotenv from 'dotenv'
import { google } from 'googleapis'

dotenv.config()

export const GET = async () => {
    const range = 'GuestList!C:C';
    const auth = await google.auth.getClient({
        scopes:['https://www.googleapis.com/auth/spreadsheets.readonly']
    })
    const sheets = google.sheets({version: 'v4', auth})
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEETS_API_ID,
        majorDimension: 'ROWS',
        range,
    })

    const data = response.data.values
    return Response.json({data})
}

export const POST = async () => {
    const range = 'RSVP!A1:B1';
    const auth = await google.auth.getClient({
        scopes:['https://www.googleapis.com/auth/spreadsheets']
    })
    const sheets = google.sheets({version: 'v4', auth})
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEETS_API_ID,
        range: range,
        valueInputOption: 'RAW',
        requestBody: {
            values: [["hello", "world"]]
        }
    });

    const data = response.status
    return Response.json({data})
}