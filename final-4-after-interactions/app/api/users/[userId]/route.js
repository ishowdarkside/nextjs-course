export async function GET(request, { params }) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {}, 3000);
    resolve();
  });

  return Response.json({
    user: {
      firstName: "Ajdin",
      lastName: "Omerovic",
    },
  });
}
