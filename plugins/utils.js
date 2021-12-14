const urlopen = (url) => {
      window.open(url);
}

export default ({}, inject) => {
  inject('urlopen', urlopen)
}
