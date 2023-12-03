use actix_cors::Cors;
use actix_web::{App, http, HttpServer, web};
use actix_web::middleware::Logger;
use dotenv::dotenv;
use crate::routes::index::index;
use crate::routes::not_found::not_found;
use crate::routes::v1::changelog::changelog;
use crate::routes::v1::swagger::swagger;

mod routes;
mod structs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  dotenv().ok();

  env_logger::init_from_env(
    env_logger::Env::new()
      .default_filter_or("info")
  );

  let bind_address = std::env::var("BIND").expect("PORT must be set.");

  HttpServer::new(|| {
    let cors = Cors::default()
      .allow_any_origin()
      .allow_any_method()
      .allowed_headers(vec![
        http::header::AUTHORIZATION,
        http::header::ACCEPT,
        http::header::CONTENT_TYPE
      ])
      .max_age(3600);

    App::new()
      .wrap(cors)
      .wrap(Logger::default())
      .service(index)
      .service(changelog)
      .service(swagger)
      .default_service(
        web::route().to(not_found)
      )
  })
    .bind(bind_address)
    .expect("it dead")
    .run()
    .await
}