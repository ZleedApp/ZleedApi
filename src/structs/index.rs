use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct IndexRes {
  pub(crate) versions: Vec<Versions>,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Versions {
  pub(crate) version: Version,
  pub(crate) path: String,
  pub(crate) swagger: String,
  pub(crate) changelog: String,
  pub(crate) deprecated: bool
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Version {
  pub(crate) name: String,
  pub(crate) code: u8
}