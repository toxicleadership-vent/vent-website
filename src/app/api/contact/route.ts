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
  console.log('GOT AUTH',)

  const sheets = google.sheets({ version: 'v4', auth })
  console.log('GOT SHEET',)

  const resource = {
    majorDimension: 'ROWS',
    values: [enteredValues],
  }
  console.log('GOT RESORUCE',)
  try {
    console.log('function', sheets.spreadsheets.values.append)
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: 'Sheet1!A1:G1',
        valueInputOption: 'USER_ENTERED',
        requestBody: resource,
        auth,
      },
      (err: Error | null, res?: GaxiosResponse | null) => {
        console.log('ERROR', err)
        if (err) {
          console.error(`The API returned an error: ${err}`)
          return
        }
        console.log('Row added successfully.', res)
      }
    )
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log('ERROR, handle except', err)
    console.log('append', err)
    throw err
  }
  console.log('no callback? - no error')
}

export async function POST(request: Request) {
  // const secretKey = process?.env?.RECAPTCHA_SECRET_KEY
  const data = await request.json()
  console.log(data)
  // console.log(secretKey, data)

  // const formData = `secret=${secretKey}&response=${data.gRecaptchaToken}`
  // try {
  //   fetch('https://www.google.com/recaptcha/api/siteverify', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((response) => {
  //     console.log('TEST')
  //     const res = response.json()
  //     console.log(res)
  //     if (res && res.data?.success && res.data?.score > 0.5) {
  //       // Save data to the database from here
  //       console.log('Saving data to the database:')
  //       console.log('res.data?.score:', res.data?.score)

  //       // return NextResponse.json({
  //       //   success: true,
  //       //   firstName,
  //       //   lastName,
  //       //   score: res.data?.score,
  //       // })
  //     } else {
  //       console.log('fail: res.data?.score:', res.data?.score)
  //       // return NextResponse.json({
  //       //   success: false,
  //       //   name,
  //       //   score: res.data?.score,
  //       // })
  //     }
  //   })
  // } catch (e) {
  //   console.log('recaptcha error:', e)
  // }
  try{
  await appendGoogleSheetsData(Object.values(data))
  return NextResponse.json({ status: 'ok', data: { success: true } })

  }catch(err) {
    console.log('erR', err)
    return NextResponse.json({status: 'failed', data: {success: false}})
  }
}
