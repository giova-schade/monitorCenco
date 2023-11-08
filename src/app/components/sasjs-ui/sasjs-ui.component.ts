import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { SASjsConfig, SASjsRequest } from '@sasjs/adapter'
import { NavLink, UserDropdownItem } from '@sasjs/ngx-sasjs'
import { SasService } from '../../services/sas.service'
import { StateService } from '../../services/state.service'

@Component({
  selector: 'app-sasjs-ui',
  templateUrl: './sasjs-ui.component.html',
  styleUrls: ['./sasjs-ui.component.scss']
})
export class SasjsUiComponent implements OnInit {
  public isLoggedIn: boolean = true
  public requestModal: boolean = false
  public sasjsConfig: SASjsConfig = new SASjsConfig()
  public username: string = ''
  public loginLoading: boolean = false



  constructor(
    private stateService: StateService,
    private sasService: SasService,
    private router: Router
  ) {
    sasService.fetchStartupData()
  }

  ngOnInit() {
    this.getSasjsConfig()

    this.stateService.isUserLoggedIn.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn
    })

    this.stateService.username.subscribe((username: string) => {
      this.username = username
    })
  }







  public getSasjsConfig() {
    this.sasjsConfig = this.sasService.getSasjsConfig()
  }

  public login(credentials: { username: string; password: string }) {
    this.loginLoading = true

    this.sasService.login(credentials.username, credentials.password).then(
      (success: any) => {
        this.loginLoading = false

        if (!success) {
          alert('Wrong username or password, please try again.')
        }else{
          console.log('login correcto!!')
        }
      },
      (err: any) => {
        this.loginLoading = false
      }
    )
  }

}
