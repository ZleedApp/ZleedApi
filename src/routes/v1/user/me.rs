use actix_web::{HttpResponse, Responder, get, patch, HttpRequest};
use actix_web::http::header::ContentType;

#[get("/v1/user/@me")]
pub async fn me_get(req: HttpRequest) -> impl Responder  {
  HttpResponse::Ok()
    .content_type(ContentType::json())
    .body("{}")
}

#[patch("/v1/user/@me")]
pub async fn me_patch(req: HttpRequest) -> impl Responder  {
  HttpResponse::Ok()
    .content_type(ContentType::json())
    .body("{}")
}