import Context from "../Context";

/**
 * Controller
 *
 * ## Life cycle
 * - _beforeActions
 * - _before()
 * - <Matched to route action>
 * - _after()
 */
export type Action = (ctx: Context, next?: () => Promise<any>) => void;

export default abstract class Controller {
  // public static symbolAroundAction = Symbol('aroundAction')

  public _aroundActions: Action[];
  public _around(context: Context, next: () => Promise<any>) {}
}
