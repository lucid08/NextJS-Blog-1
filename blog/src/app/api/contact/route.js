export async function POST(request) {
  try {
    const body = await request.json()
    console.log('Contact form submission:', body)
    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}