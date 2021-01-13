import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'
import _ from 'lodash'
import { useEffect, } from 'react'
import { connect, } from 'react-redux'
import ActionCreator from '../redux/user/action'
import wrapper from '../redux/store'
import { Navbar, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = (props,) => {
  useEffect( () => {
    props.action()
  }, [],)
  
  const { t, lang } = useTranslation()
  return (
    <div>
      <Head>
        <title>Customer App</title>
        <link rel="icon" href="/favicon.io"/>
      </Head>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Customer Web App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        </Navbar.Collapse>
      </Navbar>
      <div  style={{ marginTop: '7%', }}>
        <p>Welcome</p>
        <p>{ _.size(_.get(props, 'state.user.user', {},),) ? _.get(props, 'state.user.user', '',): ''}</p>
        <p> {t('common:hello',)}</p>
      </div>
    </div>
  )
}
const mapStateToProps = (state,) => ({
  state: state,
})
const mapDispacthToProps = (dispatch,) => ({
  action: () => dispatch(ActionCreator.userRequest(),),
})
// export const getServerSideProps = wrapper.getServerSideProps(async ({ store, },) => {
//   await this.props.action()
//   return { props: store.getState(), }
// },)

export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(Index,)