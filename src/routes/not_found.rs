use actix_web::web::Json;
use crate::structs::not_found::NotFoundRes;

pub async fn not_found() -> Json<NotFoundRes> {
  Json(NotFoundRes {
    status: 404,
    message: String::from("Route not found.")
  })
}