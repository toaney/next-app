'use client'

import LongestSubstring from './LongestSubstring';

const page = () => {
  return (
    <>
      <h2>Substring with most vowels</h2>
      <p>given substring s and integer k, return the starting index of the substring with th emost vowels. If no substring exists, return "Not Found!" witout the quotation marks.</p>
      <LongestSubstring />
    </>
  )
}

export default page;