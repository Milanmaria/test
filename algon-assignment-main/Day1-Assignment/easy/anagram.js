function isAnagram(str1, str2) {
    
    let a = str1.toLowerCase().replace(/\s/g, '');
    let b = str2.toLowerCase().replace(/\s/g, '');

    
    let sortedA = a.split('').sort().join('');
    let sortedB = b.split('').sort().join('');

    
    return sortedA === sortedB;
}

module.exports = isAnagram;


