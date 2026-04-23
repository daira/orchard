window.BENCHMARK_DATA = {
  "lastUpdate": 1776969009485,
  "repoUrl": "https://github.com/daira/orchard",
  "entries": {
    "Orchard Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "kris@nutty.land",
            "name": "Kris Nuttycombe",
            "username": "nuttycom"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a1277e4be57b8944395b66da538ae37cadfc500",
          "message": "Merge pull request #494 from zcash/release-0.13.0\n\nRelease orchard v0.13.0",
          "timestamp": "2026-04-22T17:53:58-06:00",
          "tree_id": "7028a8ba87339eac34e87436fc8963f17954dbb5",
          "url": "https://github.com/daira/orchard/commit/7a1277e4be57b8944395b66da538ae37cadfc500"
        },
        "date": 1776969008782,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2606688390,
            "range": "± 32736012",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2576809860,
            "range": "± 20254048",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3718280162,
            "range": "± 11720913",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 4857619778,
            "range": "± 39246623",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 20565513,
            "range": "± 163821",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 20548512,
            "range": "± 578341",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 23629892,
            "range": "± 223872",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 26975885,
            "range": "± 322896",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1488105,
            "range": "± 11697",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 125054,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1482828,
            "range": "± 10235",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1317026150,
            "range": "± 4891509",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 15712848,
            "range": "± 345369",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2116951,
            "range": "± 9999",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 15682716,
            "range": "± 40926",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2081316,
            "range": "± 4374",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 78506217,
            "range": "± 188984",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 10536898,
            "range": "± 35264",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 78331824,
            "range": "± 853156",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 10355461,
            "range": "± 13853",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 156930958,
            "range": "± 647074",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 21057691,
            "range": "± 39620",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 156601587,
            "range": "± 2493217",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 20699928,
            "range": "± 39618",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 453082,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 488578,
            "range": "± 982",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}