use actix_web::{App, HttpServer};
use dotenv::dotenv;
use crate::routes::index::index;
use crate::routes::v1::changelog::changelog;
use crate::routes::v1::swagger::swagger;

mod routes;
mod structs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  dotenv().ok();

  let bind_address = std::env::var("BIND").expect("PORT must be set.");

  HttpServer::new(|| {
    App::new()
      .service(index)
      .service(changelog)
      .service(swagger)
  })
    .bind(bind_address)
    .expect("it dead")
    .run()
    .await
}