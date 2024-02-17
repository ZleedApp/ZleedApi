use std::fs;
use actix_web::{HttpResponse, Responder, post, HttpRequest};
use actix_web::http::header::ContentType;

#[post("/v1/auth/register")]
pub async fn register(req: HttpRequest) -> impl Responder  {
  HttpResponse::Ok()
    .content_type(ContentType::json())
    .body("{}")
}