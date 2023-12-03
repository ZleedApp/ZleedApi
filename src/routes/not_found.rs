use actix_web::http::header::ContentType;
use actix_web::HttpResponse;
use actix_web::web::Json;
use crate::structs::not_found::NotFoundRes;

pub async fn not_found() -> HttpResponse {
  HttpResponse::NotFound()
    .json(NotFoundRes {
      status: 404,
      message: String::from("Route not found.")
    })
}