import {whenSeen} from '../assets/modules/github/behaviors/dynamic-elements'

whenSeen('readme-toc', () => import('./files/readme-toc-element'))
whenSeen('launch-code', () => import('./account_verifications/launch-code-element'))
whenSeen('severity-calculator', () => import('./repositories/advisories/severity-calculator-element'))
whenSeen('metric-selection', () => import('./repositories/advisories/metric-selection-element'))
