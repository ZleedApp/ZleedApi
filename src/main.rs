use actix_web::{App, HttpServer};
use dotenv::dotenv;
use crate::routes::index::index;

mod routes;
mod structs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  dotenv().ok();

  let bind_address = std::env::var("BIND").expect("PORT must be set.");

  HttpServer::new(|| { App::new().service(index) })
    .bind(bind_address)
    .expect("it dead")
    .run()
    .await
}