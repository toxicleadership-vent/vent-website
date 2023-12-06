import { GaxiosResponse } from 'gaxios'
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

async function appendGoogleSheetsData(enteredValues: string[]) {
  const auth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: 'service_account',
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
      token_url: 'https://oauth2.googleapis.com/token',
      universe_domain: 'googleapis.com',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const resource = {
    majorDimension: 'ROWS',
    values: [enteredValues],
  }

  try {
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: 'Sheet1!A1:G1',
        valueInputOption: 'USER_ENTERED',
        requestBody: resource,
        auth,
      },
      (err: Error | null, res?: GaxiosResponse | null) => {
        if (err) {
          console.error(`The API returned an error: ${err}`)
          return
        }
        console.log('Row added successfully.', res)
      }
    )
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log('append', err)
    throw err
  }
}

export async function POST(request: Request) {
  const data = await request.json()
  await appendGoogleSheetsData(Object.values(data))
  return NextResponse.json({ status: 'ok', data: { success: true } })
}
