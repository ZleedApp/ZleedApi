use std::fs;
use actix_web::{get, HttpResponse, Responder};
use actix_web::http::header::ContentType;

#[get("/v1/swagger.json")]
pub async fn swagger() -> impl Responder  {
  let contents = fs::read_to_string("data/v1/swagger.json")
    .expect("Should have been able to read the file");

  HttpResponse::Ok()
    .content_type(ContentType::json())
    .body(contents)
}