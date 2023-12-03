use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct NotFoundRes {
  pub(crate) status: u16,
  pub(crate) message: String,
}