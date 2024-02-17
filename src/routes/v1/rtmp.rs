use actix_web::{get, HttpRequest, HttpResponse, post, Responder};
use actix_web::http::header::ContentType;

#[post("/v1/rtmp/publish")]
pub async fn rtmp_publish(req: HttpRequest) -> impl Responder  {
  let ip = std::env::var("RTMP_IP").expect("RTMP_IP must be set.");

  // TODO: get username from stream key.
  let username = "username";

  let rtmp_url = format!("rtmp://{}/hls/{}", ip, username);

  HttpResponse::Found()
    .append_header(("Location", rtmp_url))
    .finish()
}