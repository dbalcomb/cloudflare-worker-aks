#![cfg(target_arch = "wasm32")]

use cloudflare_worker_aks::suffix;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(suffix(String::from("k8stest")), "21324540");
}
