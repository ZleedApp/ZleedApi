use actix_web::{get, web, HttpResponse, Responder, ResponseError};
use actix_web::web::Json;
use crate::structs::index::{IndexRes, Version, Versions};

#[get("/")]
pub async fn index() -> Json<IndexRes> {
  let mut versions:Vec<Versions> = Vec::new();

  versions.push(Versions {
    version: Version {
      name: String::from("v0.1.0-alpha"),
      code: 1
    },
    path: String::from("/v1"),
    swagger: String::from("/v1/swagger.json"),
    changelog: String::from("/v1/changelog.txt"),
    deprecated: false
  });

  let obj = IndexRes {
    versions
  };

  Json(obj)
}