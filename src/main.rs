use actix_web::{App, HttpServer};
use crate::routes::index::index;

mod routes;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  HttpServer::new(|| {
    App::new()
      .service(index)
  })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}