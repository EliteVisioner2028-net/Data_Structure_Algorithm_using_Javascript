// ==============================================
// Approach 1: Two Pointer + Extra Array
// Time Complexity: O(m + n)
// Space Complexity: O(m)
// ==============================================

function merge(nums1, m, nums2, n) {

    // nums1 mathi fakta valid elements ni copy banavi.
    // Aavu etle kariye chhiye kem ke merge karta vakhat nums1 overwrite thai jashe.
    let nums1Copy = nums1.slice(0, m);

    // p1 -> nums1Copy mate pointer
    // p2 -> nums2 mate pointer
    let p1 = 0;
    let p2 = 0;

    // Final merged array ni length sudhi loop chalavisu.
    for (let i = 0; i < m + n; i++) {

        // Condition:
        // 1. Jo nums2 na badha elements lai lidha hoy
        // OR
        // 2. nums1Copy ma element baki hoy ane te nums2 karta nano hoy
        // To nums1Copy mathi element mukishu.
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {

            nums1[i] = nums1Copy[p1];
            p1++; // nums1Copy no pointer aagal khasedo

        } else {

            // Nai to nums2 mathi element mukishu.
            nums1[i] = nums2[p2];
            p2++; // nums2 no pointer aagal khasedo
        }
    }

    // nums1 ma have merged sorted array mali gayu.
    return nums1;
}

// =====================
// Example
// =====================

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let m = 3; // nums1 ma valid elements
let n = 3; // nums2 ma total elements

console.log(merge(nums1, m, nums2, n));

// Output:
// [1, 2, 2, 3, 5, 6]