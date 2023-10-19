import { NextResponse } from "next/server";



// create User
// export async function POST(req: Request) {
//   const body = await req.json();
//   const { login, tel, password, email } = body;

//   const response = await db.query(
//     "INSERT INTO users (login, tel, password, email) VALUES ($1, $2, $3, $4) RETURNING *",
//     [login, tel, password, email]
//   );
//   const user = response[0];
//   return NextResponse.json({ user: user }, { status: 201 });
// }

// get all users
export async function GET(req: Request) {
 return NextResponse.json({success: true})
}

export async function Post(req:Request) {
  try {
    const body = req.json()
    return NextResponse.json(body)
  } catch (error) {
    
  }
}
