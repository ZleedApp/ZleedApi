use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct User {
  pub(crate) id: u32,
  pub(crate) username: String,
  pub(crate) display_name: String,
  pub(crate) email: String,
  pub(crate) password: String,
  pub(crate) avatar: String,
  pub(crate) badges: Vec<Badge>,
  pub(crate) stream_keys: Vec<StreamKeys>,
  pub(crate) last_live: String,
  pub(crate) created_at: String,
  pub(crate) updated_at: String
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Badge {
  pub(crate) id: u32,
  pub(crate) image: String,
  pub(crate) name: String,
  pub(crate) description: String
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct StreamKeys {
  pub(crate) id: u32,
  pub(crate) key: String,
  pub(crate) description: String
}