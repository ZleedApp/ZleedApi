use actix_web::{get, HttpRequest, HttpResponse, post, Responder};
use actix_web::http::header::ContentType;

#[post("/v1/rtmp/publish")]
pub async fn rtmp_publish(req: HttpRequest) -> impl Responder  {
  HttpResponse::TemporaryRedirect()
    .append_header(("Location", "rtmp://rtmp.zleed.tv/live/username"))
    .finish()
}