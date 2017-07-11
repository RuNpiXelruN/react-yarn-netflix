import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () =>
	<SpinnerWrapper>
		<Image src="/public/img/loading.png" alt="loading spinner" />
	</SpinnerWrapper>

const SpinnerWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img`
	animation: ${spin} 4s infinite linear;
	width: 4%;
`

export default Spinner
